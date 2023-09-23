import React, { useState, useContext, useReducer } from "react";
import axios from "axios";
import { Panel } from "@vkontakte/vkui";
import { AdminPanelHeader, AdminPanelMain } from "/";
import { NAME_PROJECT, NAME_PROJECT_LOWER_CASE } from "../../constants";
// import { SocketManager, formatCoinsToServer } from "../../helpers";
import { APIManager } from "../../helpers";
import { FirebaseContext } from "../../context/firebase-context";
import { doc, updateDoc } from "firebase/firestore";

const { callMethod } = APIManager;

const AdminPanel = ({ go, id, openAlertPay, snackbar, getGroupId, groupIdObj }) => {
  const { db, isAdmin } = useContext(FirebaseContext);

  const documentRef = doc(db, "links", groupIdObj?.id);

  const [groupIdMan, setGroupIdMan] = useState("");
  const [groupIdWoman, setGroupIdWoman] = useState("");
  const [isBanned, setIsBanned] = useState(false);
  const [operation, setOperation] = useState(false);
  const [activeTab, setActiveTab] = useState("man");

  function tab(type) {
    switch (type) {
      case "man":
        setActiveTab(type);
        break;
      case "woman":
        setActiveTab(type);
        break;
      default:
        break;
    }
  }

  async function  editLinkGroupMan(type) {
    if (!groupIdMan) {
      openAlertPay("Вы не ввели ссылку на группу", "red");
    }

    switch (type) {
      case "man":

    

      try {
        // Обновите документ с новыми данными
        await updateDoc(documentRef, {groupId: groupIdMan});
        openAlertPay("Вы успешно изменили ссылку на группу");
      } catch (error) {
        openAlertPay("Ошибка при обновлении ссылки", "red");
      }

        // axios
        //   .post("https://ods-studio.ru/hohol/edit", {
        //     input: groupIdMan,
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //     if (response.data === "ok") {
        //       openAlertPay("Вы успешно изменили ссылку на группу");
        //     } else {
        //       openAlertPay("Вы указали невалидную ссылку", "red");
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });

        break;
      case "woman":
        // callMethod("editLinkGroupWoman", {
        //   groupIdWoman,
        // }).then(({ message, status }) => {
        //   // сообщение об успешном изменении группы
        //   openAlertPay(message, status === "denied" ? "red" : "green");
        // });
        break;
      default:
        break;
    }
  }

  function onChangeAction(e, type) {
    const value = e.target.value.trim();

    switch (type) {
      case "woman":
        setGroupIdWoman(value);
        console.log("value:", value);
        break;
      case "man":
        console.log("value:", value);
        setGroupIdMan(value);
        break;
    }
  }

  return (
    <Panel id={id}>
      <AdminPanelHeader go={go} tab={tab} activeTab={activeTab} />
      <AdminPanelMain
        activeTab={activeTab}
        onChangeAction={onChangeAction}
        setIsBanned={setIsBanned}
        isBanned={isBanned}
        editLinkGroupMan={editLinkGroupMan}
        setOperation={setOperation}
        operation={operation}
        NAME_PROJECT={NAME_PROJECT}
        groupIdMan={groupIdMan}
        groupIdWoman={groupIdWoman}
        getGroupId={getGroupId}
      />

      {snackbar}
    </Panel>
  );
};

export { AdminPanel };
