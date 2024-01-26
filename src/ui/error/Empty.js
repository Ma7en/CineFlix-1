/* eslint-disable react/prop-types */
function Empty({ resourceName, classN }) {
    return (
        <>
            <section className={classN || resourceName}>
                <div className="container">
                    <h2 className="section-heading">{resourceName}</h2>
                    <div className="empty">
                        <p>No {resourceName} could be found.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Empty;
