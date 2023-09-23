import React, { useState, useEffect, useReducer } from "react";
import {
  Group,
  Header,
  Cell,
  Div,
  Input,
  Button,
  Checkbox,
} from "@vkontakte/vkui";

const AdminPanelMain = ({
  activeTab,
  onChangeAction,
  setIsBanned,
  isBanned,
  editLinkGroupMan,
  setOperation,
  operation,
  transfer,
  NAME_PROJECT,
  groupIdMan,
  groupIdWoman,
  getGroupId,
}) => {

  return (
    <Div>
      {activeTab === "man" ? (
        <>
          <Group
            style={{ margin: "55px 20px 0px 20px" }}
            header={<Header mode="secondary">Введите id группы</Header>}
          >
            <Input
              // value={groupIdMan}
              defaultValue={getGroupId}
              onChange={(e) => onChangeAction(e, "man")}
              type="text"
            ></Input>
            <Button
              style={{
                backgroundColor: "#165df5",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={() => editLinkGroupMan("man")}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group>
        </>
      ) : (
        <>
          {/* <Group
            style={{ margin: "55px 20px 0px 20px" }}
            header={<Header mode="secondary">Введите ссылку на группу</Header>}
            separator="hide"
          >
            <Input
              // value={groupIdMan}
              onChange={(e) => onChangeAction(e, "woman")}
              type="text"
            ></Input>
            <Button
              style={{
                backgroundColor: "#165df5",
                color: "white",
                marginTop: "10px",
                height: " 35px",
              }}
              onClick={transfer}
              mode="commerce"
              size="xl"
              stretched
            >
              Изменить
            </Button>
          </Group> */}
        </>
      )}
    </Div>
  );
};

export { AdminPanelMain };
