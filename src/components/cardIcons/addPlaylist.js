import React, {useContext} from "react";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { MoviesContext } from "../../contexts/moviesContext";
import IconButton from "@material-ui/core/IconButton";

const PlaylistAddIcons = ({movie}) => {
    const context = useContext(MoviesContext);
    const handlerAddToTheMustWatchList = (e) => {
        e.preventDefault();
        context.addToMustWatchList(movie);
    }
    return (
        <IconButton aria-label="Add to the must watch list" onClick={handlerAddToTheMustWatchList}>
        <PlaylistAddIcon/>
        </IconButton>
    )
};

export default PlaylistAddIcons;
