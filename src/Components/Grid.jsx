import React from 'react';

class Grid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const rows = Number(this.props.rows) || 3;
        const cols = Number(this.props.cols) || 3;
        const grid = [];

        for (let i = 0; i < rows; i++) {
            grid[i] = [];
            for (let j = 0; j < cols; j++) {
                grid[i].push(
                    <button>btn</button>
                )
            }
        }

        return (
            <div className="grid" style={{'--columns': cols}}>
                {grid}
            </div>
        );
    }
}

export default Grid