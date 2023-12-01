
export default function AddMovie({
    onClose,
    onCreate,
})
{
    return (
        <div className="overlay" >
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="movie-container">
                    <header className="headers">
                        <h2>Add User</h2>
                        <button className="btn close" onClick={onClose}>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark"
                                className="svg-inline--fa fa-xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                <path fill="currentColor"
                                    d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z">
                                </path>
                            </svg>
                        </button>
                    </header>
                    <form onSubmit={onCreate}>
                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="title" name="title" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Description</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-user"></i></span>
                                    <input id="description" name="description" type="text" />
                                </div>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group">
                                <label htmlFor="img">Image URL</label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-envelope"></i></span>
                                    <input id="img" name="img" type="text" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="_createdOn">Created On: </label>
                                <div className="input-wrapper">
                                    <span><i className="fa-solid fa-phone"></i></span>
                                    <input id="_createdOn" name="phoneNumber" type="date" />
                                </div>
                            </div>
                        </div>

                       
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit">Save</button>
                            <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
        
 
    );
};
