export default function AvatarInput(props) {

  const handleChange = e => {
    props.onAvatarChange(e.target.value);
  }

  return (
    <fieldset>
        <legend>頭像</legend>
        <select onChange={handleChange}>
          <option value="janclai">原始頭像</option>
          <option value="brick">Brick</option>
        </select>
    </fieldset>
  );
}
