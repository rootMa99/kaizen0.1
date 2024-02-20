import React, { useState } from "react";
import c from "./HomeForm.module.css";
import Select from "react-select";
const customStyles = {
  control: (provided, state) => ({
    ...provided,
    width: "100%",
    height: "auto",
    fontWeight: "600",
    textTransform: "uppercase",
    borderRadius: "5px",
    fontFamily: `Formular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                  "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                  "Segoe UI Symbol"`,
    letterSpacing: "2px",
    textAlign: "center",
    outline: "none",
    border: "1px solid transparent",
    backgroundColor: "transparent",
    boxShadow: "none",
    margin: "auto",

    "&:hover": {
      border: "1px solid transparent",
      cursor: "pointer",
    },
  }),
  option: (provided, state) => ({
    width: "100%",
    padding: "0.5rem",
    color: state.isFocused ? "#f3f3f3" : "#f33716",
    backgroundColor: state.isFocused && "#474b4d",
    fontFamily: `Formular, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
                  "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
                  "Segoe UI Symbol"`,
    textTransform: "uppercase",
    outline: "none",
    textAlign: "center",
    "&:hover": {
      cursor: "pointer",
    },
  }),
  input: (provided) => ({
    ...provided,
    color: "#f3f3f3",
  }),
  singleValue: (p) => ({
    ...p,
    color: "#f3f3f3",
  }),
  menuList: (provided) => ({
    maxHeight: "200px",
    overflowY: "auto",
    overflowX: "hidden",
    scrollbarWidth: "thin",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      width: "5px",
      backgroundColor: "#535151",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#f33716",
    },
    "&::-webkit-scrollbar-track": {
      backgroundColor: "transparent",
    },
  }),
};
const statusC = [
  {
    value: "v1",
    label: "v1",
  },
  {
    value: "v1",
    label: "v1",
  },
  {
    value: "v3",
    label: "v3",
  },
];

const HomeForm = () => {
  const [dataform, setDatafrom] = useState({
    matricule: "",
    matriculeCm: "",
    matriculeSl: "",
    zone: "",
    equipe: "",
    responsable: "",
    problem: "",
    solution: "",
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(dataform)
  };

  const onChangehandler = (e, t) => {
    switch (t) {
      case "problem":
        setDatafrom((prev) => ({ ...prev, problem: e.target.value }));
        break;
      case "matricule":
        setDatafrom((prev) => ({ ...prev, matricule: e.target.value }));
        break;
      case "matriculeCm":
        setDatafrom((prev) => ({ ...prev, matriculeCm: e.target.value }));
        break;
      case "matriculeSl":
        setDatafrom((prev) => ({ ...prev, matriculeSl: e.target.value }));
        break;
      case "zone":
        setDatafrom((prev) => ({ ...prev, zone: e.value }));
        break;
      case "equipe":
        setDatafrom((prev) => ({ ...prev, equipe: e.value }));
        break;
      case "responsable":
        setDatafrom((prev) => ({ ...prev, responsable: e.value }));
        break;
      case "solution":
        setDatafrom((prev) => ({ ...prev, solution: e.target.value }));
        break;
      default:
    }
  };

  return (
    <div className={c.container}>
      <form className={c.form} onSubmit={handleSubmit}>
        <p className={c.title}>kaizen:</p>
        <p className={c.titles}>
          Create an environment in which everyone feels empowered to contribute
        </p>
        <input
          placeholder="Matricule (Operateur)"
          className={`${c.username} ${c.input}`}
          type="text"
          onChange={e=>onChangehandler(e, "matricule")}
          required
        />
        <input
          placeholder="Matricule (ContreMaitre)"
          className={`${c.password} ${c.input}`}
          type="text"
          onChange={e=>onChangehandler(e, "matriculeCm")}
          required
        />
        <input
          placeholder="Matricule (Shef De Shift)"
          className={`${c.password} ${c.input}`}
          type="text"
          onChange={e=>onChangehandler(e, "matriculeSl")}
          required
        />
        <div className={c.select}>
          <Select
            options={statusC}
            id="multiSelect"
            inputId="shiftleader1"
            styles={customStyles}
            defaultValue={{
              value: "zone",
              label: "zone",
            }}
            menuPlacement="top"
            onChange={e=>onChangehandler(e, "zone")}
          />
        </div>
        <div className={c.select}>
          <Select
            options={statusC}
            id="multiSelect"
            inputId="shiftleader1"
            styles={customStyles}
            defaultValue={{
              value: "Equipe",
              label: "Equipe",
            }}
            menuPlacement="top"
            onChange={e=>onChangehandler(e, "equipe")}
          />
        </div>
        <div className={c.select}>
          <Select
            options={statusC}
            id="multiSelect"
            inputId="shiftleader1"
            styles={customStyles}
            defaultValue={{
              value: "Responsable",
              label: "Responsable",
            }}
            menuPlacement="top"
            onChange={e=>onChangehandler(e, "responsable")}
          />
        </div>
        <textarea
          required
          cols="25"
          rows="5"
          id="textarea"
          name="textarea96"
          placeholder="Problem"
          className={`${c.password} ${c.input}`}
          onChange={e=>onChangehandler(e, "problem")}
        ></textarea>
        <textarea
          required
          cols="25"
          rows="5"
          id="textarea"
          name="textarea96"
          placeholder="Solution"
          className={`${c.password} ${c.input}`}
          onChange={e=>onChangehandler(e, "solution")}
        ></textarea>
        <button className={c.btn} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomeForm;
