import React, { forwardRef }  from 'react'

const Characters = forwardRef((props, ref) => {
    return (
        <section ref={ref}>
            <div>
                Characters
            </div>
        </section>
    )
});

export default Characters;