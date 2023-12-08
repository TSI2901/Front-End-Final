const MovieDeleteModal = ({
    onClose,
    onDelete,
}) => {
    return (
        <div className="overlay">
            <div className="backdrop" onClick={onClose}></div>
            <div className="modal">
                <div className="confirm-container">
                    
                        <h2>Are you sure you want to delete this account?</h2>
                        
                
                    <div className="actions">
                        <div id="form-actions">
                            <button id="action-save" className="btn" type="submit" onClick={onDelete}>Delete</button>
                            <button id="action-cancel" className="btn" type="button" onClick={onClose}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDeleteModal;