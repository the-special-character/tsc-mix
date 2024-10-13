"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function BiMeetCalendar() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK;

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "15min" });
      cal("ui", {
        theme: "auto",
        styles: { branding: { brandColor: "#ff0000" } },
        hideEventTypeDetails: true,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <div>
      <Cal
        namespace="15min"
        calLink={calLink!}
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view", theme: "light" }}
      />
    </div>
  );
}
