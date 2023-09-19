import * as React from "react";
import { BezierConnector, BrowserJsPlumbInstance, newInstance } from "@jsplumb/browser-ui";
import { debounce } from "lodash";

type Props = {
  skills: Queries.TimelineYamlSkills[];
  rerenderCount?: number
};

export function useTimelineConnectors({ skills, rerenderCount }: Props) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const dotRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = React.useRef<(Element | null)[]>([]);
  const jsPlumbInstance = React.useRef<BrowserJsPlumbInstance | null>(null)

  const drawConnections = React.useCallback(() =>  {
    skills.forEach((skill, i) => {
      const source = cardRefs.current[i];
      const target = dotRefs.current[i];
      if (source && target && jsPlumbInstance.current) {
        jsPlumbInstance.current.connect({
          source,
          target,
          anchors: ["Left", "Right"],
          endpoint: "Blank",
          cssClass: `connect connect-${i}`,
          paintStyle: {
              strokeWidth: 1,
              stroke: 'currentColor',
              dashstyle: '3 3',
          },
          connector: {
            type: BezierConnector.type,
            options: {
              curviness: 30,
            },
          },
        });
      }
    });
  }, [skills]);

  // set up jsPlumb
  React.useEffect(() => {
    if (rootRef.current) {
      jsPlumbInstance.current = newInstance({
        container: rootRef.current,
      });
      drawConnections();
    }
    return () => {
      if ( jsPlumbInstance.current ) {
        jsPlumbInstance.current.deleteEveryConnection()
      }
    }
  }, []);

  React.useEffect(() => {
    if ( jsPlumbInstance.current && rootRef.current ) {
      jsPlumbInstance.current.repaint(rootRef.current)
    }
  }, [rerenderCount]);

  // redraw connectors on resize
  React.useEffect(() => {
    console.log("rerender?")
    const debouncedHandleResize = debounce(function handleResize() {
      if ( jsPlumbInstance.current && rootRef.current ) {
        jsPlumbInstance.current.repaint(rootRef.current)
      }
    }, 300)

    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    }
  }, []);

  return {
    rootRef,
    dotRefs,
    cardRefs
  }
}
