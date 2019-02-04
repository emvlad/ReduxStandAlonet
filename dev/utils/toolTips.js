import ReactTooltip from "react-tooltip";

export const toolTips = () => {
  return (
    <div>
      <ReactTooltip id="completName" type="dark" effect="solid">
        This is the first and the last names
      </ReactTooltip>

      <ReactTooltip id="profil" type="dark" effect="solid">
        <p> This is the passion of the actor</p>
      </ReactTooltip>
    </div>
  );
};
//<h4 data-tip data-for="completName">fullname</h4>
