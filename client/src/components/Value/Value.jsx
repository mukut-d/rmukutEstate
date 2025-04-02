import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";

import { MdOutlineArrowDropDown } from "react-icons/md";

import data from "../../utilities/accordion.js";
import "./Value.css";
import { useState } from "react";

const Value = () => {
  const [className, setClassName] = useState("");
  return (
    <section className="v-wrapper">
      <div className="paddings innerWidth flexCenter  v-container">
        {/* left Side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./main3.jpg" alt="main2" />
          </div>
        </div>

        {/* right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always help you to find right property <br /> Best service you
            can get is from us related to buying the best property that will
            have great value in future.
          </span>

          <Accordion
            className="accordion"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              
              return (
                <AccordionItem
                  className={`${className} accordionItem`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className="accordionButton flexCenter">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassName("expanded")
                            : setClassName("collapsed")
                        }
                      </AccordionItemState>

                      <div className="flexCenter icon">{<item.icon />}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;
