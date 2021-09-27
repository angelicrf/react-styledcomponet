import React, {Component} from 'react';
import {CardStyled} from "../StyledComponents/CardStyled";

export default function Card ({items:{id,title,body,image}}) {
        return (
            <CardStyled chngDir={id % 2 === 0 && "row-reverse" }>
              <div>
                  <h1>{title}</h1>
                  <p>{body}</p>
              </div>
                <div>
                  <img src={`./images/${image}`} alt=''  />
                </div>

            </CardStyled>
        );
}