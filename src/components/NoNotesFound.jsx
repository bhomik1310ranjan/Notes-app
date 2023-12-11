import notFoundImg from "../assets/notFoundImg.png";

function NoNotesFound() {
    return (
        <div className="flex flex-col items-center gap-y-4">
            <img src={notFoundImg} alt="NoNotesFoundImage" />
            <p className="text-2xl text-center">No notes found</p>
        </div>
    );
}

export default NoNotesFound;
