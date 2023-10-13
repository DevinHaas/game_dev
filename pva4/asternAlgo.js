function aStar(grid, start, end) {
    // Implementiere den A* Algorithmus hier
    // Nutze eine Datenstruktur, um offene und geschlossene Knoten zu verfolgen
    // Berechne g-Werte, h-Werte und f-Werte für die Knoten
    // Finde den kürzesten Weg und gib die Reihenfolge der besuchten Knoten zurück
    let g = 0;
    let h = 0;
    let f = 0;
    let path = []

    currentX = start.x;
    currentY = start.y;

    while (currentX !== end.x && currentY !== end.y) {

        nextNode = calculateNextNode(currentX, currentY, g, end)

        g++;
        h = Math.abs(currentX - end.x) + Math.abs(currentY - end.y);
        f = g + h;


    }


}


function calculateNextNode(x, y, g, end) {
    let currentX = x;
    let currentY = y;



    let f1 = g + Math.abs(currentX + 1 - end.x) + Math.abs(currentY - end.y)
    let f2 = g + Math.abs(currentX - end.x) + Math.abs(currentY + 1 - end.y)

    let f3 = 0;
    let f


    if (f1 < f2) {
        return [currentX + 1, currentY]
    } else {
        return [currentX, currentY + 1]
    }


}


// Beispielaufruf
const grid = [
    [0, 0, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
];
const start = {x: 0, y: 0};
const end = {x: 4, y: 4};
const path = aStar(grid, start, end);


console.log(path);