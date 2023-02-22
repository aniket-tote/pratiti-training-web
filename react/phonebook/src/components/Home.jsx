import React, { useState, useEffect } from "react";
import Contact from "./Contact";

const Home = () => {
  const [contactData, setContactData] = useState({
    firstname: "",
    lastname: "",
    number: "",
  });

  const [allContacts, setAllContacts] = useState(
    localStorage.getItem("allcontacts") === null
      ? []
      : JSON.parse(localStorage.getItem("allcontacts"))
  );

  const [fetchedcontact, setFetchedContact] = useState();

  const [dltIndx, setDltIndx] = useState();

  useEffect(() => {
    console.log(dltIndx);
  }, [dltIndx]);

  // console.log(dltIndx);

  useEffect(() => {
    localStorage.setItem("allcontacts", JSON.stringify(allContacts));
    setFetchedContact(JSON.parse(localStorage.getItem("allcontacts")));
  }, [allContacts]);

  return (
    <div className="home">
      <div className="addcontact">
        <div className="newcontactheading">New Contact</div>
        <div className="divider"></div>
        <form
          action=""
          method="get"
          className="form"
          onReset={(e) => {
            e.preventDefault();
            setContactData({ firstname: "", lastname: "", number: "" });
          }}
          onSubmit={(e) => {
            e.preventDefault();
            console.log(contactData);
            setAllContacts((prevItem) => [
              ...prevItem,
              {
                firstname: contactData.firstname,
                lastname: contactData.lastname,
                number: contactData.number,
              },
            ]);
          }}
        >
          <input
            type="text"
            name="firstname"
            value={contactData.firstname}
            placeholder="firstname"
            onChange={(e) => {
              setContactData({ ...contactData, firstname: e.target.value });
            }}
          />
          <input
            type="text"
            name="lastname"
            value={contactData.lastname}
            placeholder="lastname"
            onChange={(e) => {
              setContactData({ ...contactData, lastname: e.target.value });
            }}
          />
          <input
            type="text"
            name="number"
            value={contactData.number}
            placeholder="number"
            onChange={(e) => {
              setContactData({ ...contactData, number: e.target.value });
            }}
          />
          <div className="btns">
            <input className="create" type="submit" value="create"></input>
            <input className="cancel" type="reset" value="cancel"></input>
          </div>
        </form>
      </div>
      <div className="mycontacts">
        <div className="mycontactsheading">My contacts</div>
        <div className="searchbox">
          <input
            className="searchbar"
            type="text"
            placeholder="Search.."
          ></input>
        </div>
        <div className="contactlist">
          {fetchedcontact &&
            fetchedcontact.map((e, t) => {
              return (
                <Contact
                  key={t}
                  index={t}
                  firstname={e.firstname}
                  lastname={e.lastname}
                  number={e.number}
                  setDltIndx={setDltIndx}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
