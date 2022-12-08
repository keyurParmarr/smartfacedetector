import React from "react";
import "./Table.css";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Button,
} from "@chakra-ui/react";
export const Table = (props) => {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr className="table-heading-row">
            <th>Sr.No</th>
            <th>Links</th>
          </tr>
        </thead>

        <tbody>
          {props.data.map((link, i) => {
            return (
              <tr className="table-data-row">
                <td>{i}</td>
                <td>
                  <Popover placement="bottom">
                    <PopoverTrigger>
                      <Button>{link}</Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverHeader fontWeight="semibold">
                        Image{" "}
                      </PopoverHeader>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        <img src={link} className="img" alt="" />
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
