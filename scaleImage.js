function scaleImage(image) {
    let scaleFactorW = image.width > width ? width / image.width : width > image.width ? width / image.width : 1;
    let scaleFactorH = image.height > height ? height / image.height : height > image.height ? height / image.height : 1;
    return [scaleFactorW, scaleFactorH];
}
