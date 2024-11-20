# matt-pedone

Personal Website and Portfolio

## Getting Started

I've come up with a layout and a color scheme, and started to build out the CSS. I think for now, the page will be static, but I would like to incorporate some JavaScript to make it more dynamic. Namely, I want the main body section to change when the nav links are clicked, rather than having all of the text on one page and jumping to anchors. I also need to finish the graphics, and adjust the layout a bit.

### The Design

| Element | Color |
| --- | --- |
| Header | #31594E |
| Nav/Side Bar | #8DA693 |
| Main Text Background | #D9D4BA |
| Footer | #D9734E |
| Highlight | #D9734E |
| Text | #222026 |
| Header/Sidebar Text | #FFFFFF |

Header text is Helvetica, as will be any captions and/or labels. The rest of the text is Courier, an odd choice, but I want to mimic the Gemini Familiarization Handbook, as I am recreating illustrations done by my grandfather for that manual.

## Next Steps

- Design a timeline for my About Me page
  - link from timeline to relevant sections of Bio
- Add JavaScript to "refresh" main body section
- Add Links
- Start blogging

I tried implementing some JavaScript, but I don't know enough to get it working correctly yet. Hopefully soon. For now, the site is static with separate pages. I have implemented a bunch of media queries to make the site responsive, but I want to learn more about that, as it feels clunky. For now, though, my site is up and running!

Re-worked some of the font sizes, and the header image size to make them more responsive. Also eliminates a lot of media queries, which were getting clunky. Clamp is a neat CSS function.

After checking the live site on a couple of devices, I've decided to remove the helemt image from the header entirely. I really like the image, so I moved it to the Contact page in place of the comm harness. In order to keep the title centered, and not stretched across the entire page, I added a couple of empty divs on either side of the title and then set their displays to none at narrower widths.

I also adjusted the body text again, moving the images back to the right side, and chaging the spacing to 'justify-content: space-evenly;' to add a little whitespace around the text.