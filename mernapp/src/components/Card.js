import React from 'react'

export default function() {
    return (
        <div>
            <div>
                <div className="card mt-3" style={{ "width": "20rem", "maxHeight": "360px" }}>
                    <img src="https://img.onmanorama.com/content/dam/mm/en/food/recipe/images/2024/1/3/paneer-tikka.jpg" className="card-img-top h-auto w-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some Important text</p>
                        <div className="container w-100">
                            <select className="m-2 h-100 bg-success rounded text-light">
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100 bg-success rounded text-light">
                                <option value="Half">Half</option>
                                <option value="Full">Full</option>
                            </select>
                            <div className="d-inline">
                                Total price
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
