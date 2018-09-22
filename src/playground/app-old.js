
// jsx - javaScript XML
// jsx doesn't have built-in data binding.
const appObject = {
    title: "The Indecision App",
    subtitle: "Put your life in the hands of the Computer.",
    option: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;
    if(option) {
        appObject.option.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();

}
const removeAll = () => {
    console.log("INSIDE REMOVE ALL");
    appObject.option = [];
    renderTemplate();
}

const onMakeDecision = () => {
    const randonNum = (~~(Math.random() * appObject.option.length));
    const option = appObject.option[randonNum];
    alert(option);
}
const appRoot = document.getElementById("app");

const renderTemplate = () => {
    const template = (
        <div>
            <h1>{appObject.title}</h1>
            {appObject.subtitle && <pre>{appObject.subtitle}</pre>}
            <pre>Here are your Options: </pre>
            <button onClick = {onMakeDecision} disabled = {appObject.option.length<1}>What should I do?</button>
            <button onClick = {removeAll}>Remove All</button>

            {(appObject.option && appObject.option.length > 0) ? <ol>
                {
                appObject.option.map((value, key) => <li key = {key}>{value}</li>)
            }
            </ol> : <pre>No Options</pre>}
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
    
}
renderTemplate();

const user = {
    name: "Usama Tahir",
    age: 23,
    location: "Location: Lahore"
};
function getLocation(location) {
    if (location) {
        return <pre>{location}</pre>;
    }
}
const template2 = (
    <div>
        <pre>{user.name ? user.name : 'Anonymous'}</pre>
        {(user.age && user.age) > 18 && <pre>Age: {user.age}</pre>}
        {getLocation(user.location)}
    </div>
);


// side notes
// undefined, null and booleans are ignored by JSX
// we are referencing the function in Form onSubmit event handler like {onFormSubmit} and not calling it like {onFormSubmit()} because
// if we call that function then it will return some value and set onSubmit = "THAT RETURNED VALUE" and expected behaviour of the app will not show.
// empty string is falsy value.
//  arays are supported by jsx.