export const RGBToHex = (rgba) => {
    // Choose correct separator
    let sep = rgba.indexOf(",") > -1 ? "," : " ";
    // Turn "rgb(r,g,b)" into [r,g,b]
    rgba = rgba.substr(5).split(")")[0].split(sep);

    const color = {
        r: rgba[0],
        g: rgba[1],
        b: rgba[2],
        a: rgba[3]
    }
    return color;
  }