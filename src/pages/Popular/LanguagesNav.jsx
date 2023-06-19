import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { getRepos } from "../../state/popular/popular.request"

const languages = ['All', 'Javascript', 'Ruby', 'Java', 'CSS', 'Python']

const LanguagesNav = () => {
    const dispatch = useDispatch()
    const [searchParams, setSearchParams] = useSearchParams()
    const lang = useSelector(state => state.popular.selectedLanguage)
    const selectedLanguage = searchParams.get('lang') ?? lang

    useEffect(() => {
        dispatch(getRepos(selectedLanguage))
    }, [])

    const handleClick = (value) => {
        dispatch(getRepos(value))
        setSearchParams(`?lang=${value}`)
    }

    return (
        <ul className="languages">
            {languages.map((language, index) => (
                <li key={index} className={language === selectedLanguage ? 'active' : null}
                    onClick={() => handleClick(language)}>{language}</li>
            ))}
        </ul>
    )
}

export default LanguagesNav