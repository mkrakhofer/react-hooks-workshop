import React, {useState, useContext, useEffect} from "react";
import { ThemeContext } from "../Context/ThemeContext"
import { LocaleContext } from "../Context/LocaleContext"

const FunctionalGreeting = (props: any) => {
    const name = useFormInput(props.name);
    const surname = useFormInput(props.surname);
    const theme = useContext(ThemeContext);
    const locale = useContext(LocaleContext);
    const width = useWindowWidth();
    useDocumentTitle(name.value + " " + surname.value);

    return <div className={theme}>
        <h3>Functional Component</h3>
        <input {...name}/>
        <input {...surname}/>
        <p>{locale}</p>
        <p>{width}</p>
    </div>
};

const useWindowWidth = () => {
    const [width, setWidth] = useState(window.innerWidth);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    });
    
    return width;
}

const useDocumentTitle = (title) => {
    useEffect(() => {
        document.title = title;
    });
}

const useFormInput = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const onValueChange = (e) => {
        setValue(e.target.value);
    }

    return {value, onChange: onValueChange};
}

export default FunctionalGreeting;