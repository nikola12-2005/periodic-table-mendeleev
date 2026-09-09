// JavaScript Document	
Spry.Utils.hasClassName = function (ele, className)
{
	if (!ele || !className)
		return false;

	if (!ele.className)
		ele.className = '';

	return ele.className.search(new RegExp("\\s*\\b" + className + "\\b")) != -1;
};
function GrayOutTable(activeClass)
{
	var rows = ds1.getData(true);
	var numRows = rows.length;

	for (var i = 1; i <= numRows; i++)
	{
		var ele = Spry.$("div_" + i);
		if (ele)
		{
			if (!Spry.Utils.hasClassName(ele, activeClass))
				Spry.Utils.addClassName(ele,"grayOut");
			else
				Spry.Utils.removeClassName(ele,"grayOut");
		}
	}
}
function clearGray()
{
	var rows = ds1.getData(true);
	var numRows = rows.length;

	for (var i = 1; i <= numRows; i++)
	{
		var ele = Spry.$("div_" + i);
		if (ele)
		{
			if (Spry.Utils.hasClassName(ele, "grayOut"))
				Spry.Utils.removeClassName(ele,"grayOut");
		}
	}
}
