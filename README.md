#Project Gemini
Jekyll Pre-config and experimental BIM Grid

##Jekyll Bootstrap
Project Mercury started off as a launchpad (hence the space theme) for a stripped out Jekyll, setup with all my preferred layouts and SASS. Project Gemini is the second version of this bootstrap.

##Experimental BIM Grid
Experimental is the key phrase here. The problem with the old row/column-x layouts is that column-x doesn't mean the same thing across all devices. On mobile you may want it to span 100%, while at a medium breakpoint it should only be half, and only at desktop sizes should it be x size. This is my first attempt, using a BIM structure, to define widths for different breakpoints without going class-crazy. Again, this is experimental

###Grid setup
The key idea is mobile first everything is 100% width by default, so you only have to define medium and large breakpoints. A div with the class block__m--half will, on mobile be 100% width, while at your medium break snap to 50%. If you add a l--two-thirds, at your large breakpoint it will snap to 66% width.
