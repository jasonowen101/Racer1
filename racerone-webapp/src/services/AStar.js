// AStar.js
class AStar {
    constructor(grid) {
      this.grid = grid;
      this.openSet = [];
      this.closedSet = [];
    }
  
    heuristic(a, b) {
      // Your specific heuristic calculation goes here
      return Math.abs(a.x - b.x) + Math.abs(a.y - b.y);
    }
  
    removeFromArray(arr, element) {
      for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] === element) {
          arr.splice(i, 1);
        }
      }
    }
  
    neighbors(node) {
      const result = [];
      const { x, y } = node;
  
      // Define how to get neighbors based on your grid structure
      // This is a simplified example for a 2D grid
      if (x < this.grid.length - 1) result.push(this.grid[x + 1][y]);
      if (x > 0) result.push(this.grid[x - 1][y]);
      if (y < this.grid[0].length - 1) result.push(this.grid[x][y + 1]);
      if (y > 0) result.push(this.grid[x][y - 1]);
  
      return result;
    }
  
    astar(start, end) {
      this.openSet.push(start);
  
      while (this.openSet.length > 0) {
        let winner = 0;
        for (let i = 0; i < this.openSet.length; i++) {
          if (this.openSet[i].f < this.openSet[winner].f) {
            winner = i;
          }
        }
  
        const current = this.openSet[winner];
  
        if (current === end) {
          // You've reached the goal, handle accordingly
          console.log('Path found!');
          break;
        }
  
        this.removeFromArray(this.openSet, current);
        this.closedSet.push(current);
  
        const neighbors = this.neighbors(current);
        for (let i = 0; i < neighbors.length; i++) {
          const neighbor = neighbors[i];
  
          if (!this.closedSet.includes(neighbor) && !neighbor.isWall) {
            const tempG = current.g + 1; // Assuming each step has a cost of 1
  
            let newPath = false;
            if (this.openSet.includes(neighbor)) {
              if (tempG < neighbor.g) {
                neighbor.g = tempG;
                newPath = true;
              }
            } else {
              neighbor.g = tempG;
              newPath = true;
              this.openSet.push(neighbor);
            }
  
            if (newPath) {
              neighbor.h = this.heuristic(neighbor, end);
              neighbor.f = neighbor.g + neighbor.h;
              neighbor.previous = current;
            }
          }
        }
      }
  
      // No path found
      console.log('No path found');
    }
  }
  
  export default AStar;
  