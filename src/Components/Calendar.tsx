import { Calendar as AntdCalendar, theme } from "antd";
import type { CalendarMode } from "antd/es/calendar/generateCalendar";
import type { Dayjs } from "dayjs";
import React from "react";

const onPanelChange = (value: Dayjs, mode: CalendarMode) => {
  console.log(value.format("YYYY-MM-DD"), mode);
};

const Calendar: React.FC = (props: any) => {
  const { token } = theme.useToken();

  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div style={wrapperStyle}>
      <AntdCalendar
        {...props}
        // value={value}
        fullscreen={false}
        onPanelChange={onPanelChange}
      />
    </div>
  );
};

export default Calendar;
