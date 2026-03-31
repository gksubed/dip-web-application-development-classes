import React from "react";

export default function StyledComponent({ newDate }) {
  return (
    <section className="animatedSection">
      This is a styled section with animation {newDate}
    </section>
  );
}
