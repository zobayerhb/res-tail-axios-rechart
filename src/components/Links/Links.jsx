import PropTypes from "prop-types";

const Links = ({route}) => {
    const {name, path} =route
    return (
        <li className="px-5">
            <a href={path}>{name}</a>
        </li>
    );
};

Links.propTypes = {
    route: PropTypes.object.isRequired
}

export default Links;
