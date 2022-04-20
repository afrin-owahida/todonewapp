import React from "react";

function CustomCheckBox(props) {

  console.log(props);
  function handleChange() {
    props.setIsChecked(!props.isChecked); //click korar por ja bydefault value ache tar ulta ta hobe and value ta setisChecked er moddhe
  } //parrent er j key seta child a setIsChecked hisebe ache
  return (
    <div>
      <div class="form-check">
        <input
          class=" h-4 w-4 border border-gray-300 rounded-sm mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox"
          checked={props.isChecked} //parrenter j bam side er key seta child a isChecked hisebe ojb er moddhe 
          onChange={handleChange}
          id="flexCheckDefault"
        />
        <label
          class="form-check-label inline-block text-gray-800"
          for="flexCheckDefault"
        >
          {props.title ? props.title : "Please check"}
        </label>
      </div>
    </div>
  );
}

export default CustomCheckBox;
