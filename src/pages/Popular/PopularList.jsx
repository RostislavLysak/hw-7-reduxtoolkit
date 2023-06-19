import { useSelector } from "react-redux"
import Loader from "../../components/Loader"
import Error from '../Error'


const PopularList = () => {

    const {
        loading,
        repos,
        error,
    } = useSelector(state => ({
        loading: state.popular.loading,
        repos: state.popular.repos,
        error: state.popular.error,
    }))

    return (
        <>
            {loading ? <Loader /> : null}
            {error ? <Error /> : null}

            <ul className="popular-list">
                {repos.map((rep, index) => (
                    <li key={rep.id} className='popular-item'>
                        <div className="popular-rank">
                            #{index + 1}
                        </div>
                        <ul className="space-list-items">
                            <li>
                                <img className="avatar" src={rep.owner.avatar_url} alt="Avatar" />
                            </li>
                            <li>
                                <a href={rep.html_url} target='_blank' rel="noreferrer">{rep.name}</a>
                            </li>
                            <li>@{rep.owner.login}</li>
                            <li>{rep.stargazers_count} stars</li>
                        </ul>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default PopularList