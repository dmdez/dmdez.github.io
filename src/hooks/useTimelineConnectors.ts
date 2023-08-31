import * as React from "react";
import { BezierConnector, BrowserJsPlumbInstance, newInstance } from "@jsplumb/browser-ui";

type Props = {
  skills: Queries.TimelineYamlSkills[];
};

export function useTimelineConnectors({ skills }: Props) {
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const dotRefs = React.useRef<(HTMLDivElement | null)[]>([]);
  const cardRefs = React.useRef<(Element | null)[]>([]);
  const jsPlumbInstance = React.useRef<BrowserJsPlumbInstance | null>(null)

  const drawConnections = React.useCallback(() =>  {
    skills.forEach((skill, i) => {
      const source = cardRefs.current[i];
      const target = dotRefs.current[i];
      if (source && target && jsPlumbInstance.current) {
        const connection = jsPlumbInstance.current.connect({
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
        connection.bind("mouseover", (d) => {
          console.log("hover?")
        })
      }
    });
  }, [skills]);

  React.useEffect(() => {
    if (rootRef.current) {
      jsPlumbInstance.current = newInstance({
        container: rootRef.current,
      });
      drawConnections();
    }

    window.onresize = () => {
      if ( jsPlumbInstance.current ) {
        jsPlumbInstance.current.deleteEveryConnection()
        drawConnections();
      }
    }
    return () => {
      if ( jsPlumbInstance.current ) {
        jsPlumbInstance.current.deleteEveryConnection()
      }
    }
  }, []);

  return {
    rootRef,
    dotRefs,
    cardRefs
  }
}
