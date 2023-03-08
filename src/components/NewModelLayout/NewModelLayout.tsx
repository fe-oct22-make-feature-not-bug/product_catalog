import React, { memo } from "react";
import { RecomendationsSlider } from "../RecomendationsSlider/RecomendationsSlider";

export const NewModelLayout: React.FC = memo(() => {
  return (
    <section>
      <RecomendationsSlider/>
    </section>
  );
});
