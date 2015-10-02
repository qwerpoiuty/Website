So today I'm going to talk about random programming things. This is going to be a pretty unstructured rant about things I find weird about JavaScript or programming in general. It's also going to include some random JavaScript derp moments that I find particularly funny.

# CamelCase

I hate camel-case. I think its ugly, makes things really hard to read, and makes me feel like I'm reading a series of Jayden Smith tweets. Sure it's more verbose to use `_` or `-`, but I think it would look so much prettier. `Array.get_index`. That looks great! `React.find_DOM_Node` is something I can definitely get behind.

Even so, it seems like the science is against me. [This paper](http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.158.9499) seems to indicate that CamelCase has significant gains when it comes to accuracy for a small tradeoff in speed. And I guess its more important to take that extra ~.42 seconds to name a variable if other people can read it easier. Whatever. I still don't like it.

# var x = 0

We've all done it. 2000 lines later, wtf is `x`. Of course, `var toBeChangedLaterByClient = 0
var toBeChangedLaterByServer = 0`, while extremely descriptive and probably useful is not really the best thing to do. Naming things is so hard.

# This

_"The this here is different from the this there. Also that this is not the same as this this."_ This makes sense. In fact, this is just a pretty normal observation about most JavaScript. While I don't have a particular problem with this sentence or this in general, I do think its pretty ridiculous. Some people like `self = this` and, while I think its fine, doesn't really solve the initial problem of self reference confusion. After all, _"This self here is different from the self there. Also that self is not the same as this self"_ really isn't much better. 

Anyway, personally I'm a fan of not using `this` if possible. I think its ugly and if I need to pass something this, I feel like I've done something wrong.

# {} + [] = 0

So this is really just one of JavaScript's weird quirks. Apparently, `{}` is interpreted as an empty code block. Thus, the remaining evaluation is `+ []` which gets interpreted as `+[Number]`. Knowing this, it's really not so strange that the equation evaluates to 0. Still weird though. Of course you've also got this mess `alert((![]+[])[+[]]+(![]+[])[+!+[]]+([![]]+[][[]])[+!+[]+[+[]]]+(![]+[])[!+[]+!+[]]);`