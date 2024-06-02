# Slideshow

    A slideshow like component that takes an array of images as a property, animating through each slide one by one. Perfect for splash pages or other relevant uses.

## Props

* slides: string[] - The slides to display, passed as 
* title: string - Title for the slideshow, displayed in the bottom left in bold. 
* description?: string -  Optional description for the slideshow, displayed under the title.

## State

* slideIndex: number - The currently visible slide

## Notes

The stylesheet for this component can be found [here](../../style/slideshow.css).

### [Source code](../slideshow.tsx)

There are several improvements that could be made here: 
* Arrow buttons on either side, skipping the current slideshow animation and manually moving to the next slide.
* Option for different titles / descriptions for each slide.
* Change slides prop, unclear that users of the component need to import outside of the component and pass into the prop.
* Problems occur when images have different sizes.