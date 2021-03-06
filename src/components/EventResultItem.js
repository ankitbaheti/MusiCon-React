import React from 'react'

const EventResultItem = ({result}) => {
    return (
        <div className="card shadow p-3 mb-5 bg-white rounded">
            <div className="card-body">
                <img className="card-img-top" src={result.images[0].url} alt='' style={{marginBottom: '10px'}}/>
                <h5 className="card-title">{result.name}</h5>
                <p>at {result._embedded.venues[0].name}</p>
                <form action={result.url}>
                    <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Ticket Master
                    </button>
                </form>
                {result.seatmap !== undefined
                    ? <form action={result.seatmap.staticUrl}>
                        <button type='btn' className="btn btn-outline-dark" style={{marginBottom: '10px'}}>Show on Seat Map
                        </button>
                    </form>
                    : <span>&nbsp;</span>}

            </div>
            <div className="card-footer">
                <small className="text-muted">Concert Date: {result.dates.start.localDate}</small>
                <br/>
                <small className="text-muted">Concert Time: {result.dates.start.localTime.substr(0, 5)}</small>
            </div>
            {result.priceRanges !== undefined
                ? <div className="card-footer">
                    <small className="text-muted">Price Range:
                        USD {result.priceRanges[0].min} - {result.priceRanges[0].max}</small>
                </div>
                : <span>&nbsp;</span>}

        </div>
    )
};

export default EventResultItem;