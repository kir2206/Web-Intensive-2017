'use strict';

function init_table(cellCount)
{
    for (let i = 0; i < cellCount; ++i)
    {
        let element = document.createElement('div')
        element.className = 'tableWhiteCell'
        document.getElementById('table').appendChild(element)
    }
}

function cell_click()
{
    invert_cell_style(event.target)
}

function invert_all_cells()
{
    document.getElementById('table').childNodes.forEach(t => { if (t.tagName == 'DIV')  invert_cell_style(t) })
}

function invert_cell_style(cell)
{
    return cell.className == 'tableWhiteCell' ? cell.className = 'tableBlackCell' : cell.className = 'tableWhiteCell'
}