import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export default function SimpleTable(prop) {
    const classes = useStyles();
    let hours = prop.data
    let content = []
    for (var index in hours){
        content.push(
            <TableRow key = {index}>
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{hours[index].temp_min}</TableCell>
                <TableCell align="right">{hours[index].temp_max}</TableCell>
            </TableRow>
        )
    }
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead className={"head"} >
                    <TableRow className={"row0"}>
                        <TableCell align="right">Time</TableCell>
                        <TableCell align="right">Temp Min</TableCell>
                        <TableCell align="right">Temp Max</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {content}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
