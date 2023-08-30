import * as React from "react";
import { max, min } from "d3-array";
import { scaleTime } from "d3-scale";
import { groupBy, orderBy, sortBy } from "lodash";
import { graphql, useStaticQuery } from "gatsby";

type Props = {
  data: Queries.TimelineQuery["allTimelineYaml"]["nodes"];
};

function getMinMaxFromData(
  d: Queries.TimelineQuery["allTimelineYaml"]["nodes"]
) {
  const startDates = d.map(({ startDate }) =>
    startDate ? new Date(startDate).valueOf() : 0
  );
  const endDates = d.map(({ endDate }) =>
    endDate ? new Date(endDate).valueOf() : Date.now().valueOf()
  );
  const minDate = min(startDates) || 0;
  const maxDate = max(endDates) || 0;
  return { minDate, maxDate };
}

export function useTimelineData() {
    const timeline = useStaticQuery<Queries.TimelineQuery>(graphql`
    query Timeline {
      allTimelineYaml {
        nodes {
          id
          name
          startDate
          endDate
          description
          workplace
        }
      }
    }
  `);

  const data = timeline.allTimelineYaml.nodes;

  const [filterWorkplace, setFilterWorkplace] = React.useState<
    string | undefined
  >();
  const sortedData = orderBy(data, "startDate", "desc");
  const filteredData = filterWorkplace
    ? sortedData.filter((d) => d.workplace === filterWorkplace)
    : sortedData;
  const { minDate, maxDate } = getMinMaxFromData(filteredData);
  const reverse = false;
  const range = reverse ? [maxDate, minDate] : [minDate, maxDate];
  const x = scaleTime().domain(range).nice();
  const groupedTimeline = groupBy(filteredData, "name");
  const groupedByWorkplace = groupBy(filteredData, "workplace");

  function getSize({
    startDate,
    endDate,
  }: {
    startDate: string | number | null;
    endDate: string | number | null;
  }) {
    if (reverse) {
      const left = (startDate ? x(new Date(startDate)) : 0) * 100;
      const leftEnd = (endDate ? x(new Date(endDate)) : x(Date.now())) * 100;
      const width = left - leftEnd;
      return { left: leftEnd, width };
    }

    const left = (startDate ? x(new Date(startDate)) : 0) * 100;
    const leftEnd = (endDate ? x(new Date(endDate)) : x(Date.now())) * 100;
    const width = leftEnd - left;
    return { left, width };
  }

  return { getSize, groupedTimeline, groupedByWorkplace, setFilterWorkplace, ticks: x.ticks(), filterWorkplace }
}
