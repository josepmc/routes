Route Utilies for Node.js
===========================

# Usage

## Get routes

This package has only one method to retrieve all the routes. You can invoke it as follows:

``` ts
// As provided by Windows, other OSes return a smaller set
interface Route {
    Age: number;
    Caption: string;
    Description: string;
    Destination: string;
    Config: any;
    Information: string;
    InstallDate: string;
    InterfaceIndex: number;
    Mask: string;
    Metric1: number;
    Metric2: number;
    Metric3: number;
    Metric4: number;
    Metric5: number;
    Name: string;
    NextHop: string; // Gateway
    Protocol: number;
    Status: string;
    Type: number;
}

network.get_routes((err, result: Route[]) => { }
```


# Copyright

Forked & improved by Josep Mateu Clemente.
Original module written by Tomás Pollak (https://github.com/tomas/network).

# License

MIT.
