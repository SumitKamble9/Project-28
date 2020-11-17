class tree
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
        this.h=h
        this.image = loadImage("images/tree.png")
		this.body=Bodies.rectangle(x, y, w, h , options);
 		World.add(world, this.body);

	}
	display()
	{
			
		var treepos=this.body.position;		
        image(this.image,800,1,500,700)
		push()
		translate(treepos.x, treepos.y);
		rectMode(CENTER)
		pop()
			
	}

}