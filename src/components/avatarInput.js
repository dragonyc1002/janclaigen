export default function AvatarInput(props) {

  const handleChange = e => {
    props.onAvatarChange(e.target.value);
  }

  return (
    <fieldset>
        <legend>頭像</legend>
        <select onChange={handleChange}>
          <option value="sena_julietta">聖奈——ジュリエッタ</option>
          <option value="sena_shiawase">聖奈——幸せ。</option>
          <option value="diep">Diep.io</option>
          <option value="chocomint">chocomint</option>
        </select>
    </fieldset>
  );
}
