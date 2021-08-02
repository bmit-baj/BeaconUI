import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Navbar, Footer, } from './components'
import { Startseite, Aufenthaltsräume, Büros, Sitzungsräume, AlleRäume } from './pages'
import useStyles from './styles'

const App = () => {
    const classes = useStyles();

    return (
        <Router>
            <div className={classes.root}>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Startseite />
                    </Route>
                    <Route path="/sitzungszimmer">
                        <Sitzungsräume />
                    </Route>
                    <Route path="/aufenthaltsräume">
                        <Aufenthaltsräume />
                    </Route>
                    <Route path="/büros">
                        <Büros />
                    </Route>
                    <Route path="/all">
                        <AlleRäume />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>
    )
}

export default App
