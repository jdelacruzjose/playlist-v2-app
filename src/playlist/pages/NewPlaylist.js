import React from "react";
import Input from '../../shared/components/FormElements/Input';
import './NewPlaylist.css'

const NewPlaylist = () => {
  return <form className="place-form">
    <Input element ="input" type="text" label="Title" />
  </form>
};

export default NewPlaylist;
