import { Suspense } from "react";
import SlowComponent from "./SlowComponent";

export default function About() {
    return (
        <>
          <h1>Main Contents</h1>
          {/* <Suspense fallback={<h1>Now loading heavy contents...</h1>} */}
          <SlowComponent />
          {/* </Suspense> */}
        </>
    );
}