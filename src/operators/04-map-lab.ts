import { fromEvent, map, tap } from "rxjs";

/**
 * Lab: Progress Bar
 */
const text = document.createElement('div');
text.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vel rutrum sapien. Curabitur lorem eros, varius vitae faucibus at, fermentum nec lacus. Ut rutrum dolor mauris, nec tincidunt libero placerat ac. Proin dignissim placerat mauris, nec tempor velit ornare ut. Nunc rutrum, sapien nec pulvinar suscipit, ex quam commodo eros, sed iaculis ligula mauris viverra tellus. Praesent faucibus efficitur lectus, congue rutrum dolor vulputate eget. Mauris auctor viverra ligula, eu dapibus lectus aliquam nec. Pellentesque risus nulla, dapibus a fringilla sed, maximus eget mauris. Duis lacinia finibus varius. Nulla pretium tortor tincidunt, faucibus urna non, interdum nibh. Suspendisse imperdiet in nulla in ultrices. Maecenas erat neque, maximus eu tempor vitae, rutrum eu magna. In hac habitasse platea dictumst. Vestibulum lorem elit, rutrum in mauris tincidunt, ultricies molestie velit.
<br/><br/>
Curabitur ligula lorem, commodo hendrerit eros eget, pellentesque viverra mauris. Integer quis vehicula nunc. Aliquam pellentesque magna quis nulla sollicitudin, non pretium nulla mollis. Nunc a dictum tortor, nec consequat nisl. Nunc non odio sem. Nam enim nunc, commodo eu urna sit amet, pulvinar bibendum turpis. Morbi at malesuada turpis, id suscipit arcu. Pellentesque tempus dui non nunc consectetur, nec luctus augue imperdiet. Nunc ac metus sapien. Proin consequat, nisi nec gravida fermentum, dolor sapien accumsan leo, sit amet accumsan lacus mi non metus.
<br/><br/>
Duis maximus suscipit massa. Aenean enim libero, ultrices et nunc vel, varius vulputate lacus. Cras ullamcorper, neque eu semper mollis, metus sem lacinia risus, a fermentum diam nisi sed orci. Fusce libero felis, luctus at faucibus sed, bibendum id arcu. Vestibulum id urna dapibus, euismod enim vel, finibus ipsum. Morbi pharetra ex sed leo finibus, vitae consectetur dui egestas. Phasellus dictum sed nibh ultrices tincidunt. Suspendisse tempus volutpat molestie. Nulla id maximus arcu. Nulla venenatis nisi sit amet sem tincidunt euismod.
<br/><br/>
Morbi magna elit, dapibus nec erat sed, posuere dictum lorem. Phasellus urna nunc, accumsan id nibh ut, hendrerit aliquam felis. Maecenas molestie rhoncus ex quis lacinia. Quisque eleifend ligula nibh, et consequat eros vestibulum in. Etiam nec enim et justo volutpat convallis vel a elit. Integer vel nulla aliquam, porta odio tristique, bibendum magna. Etiam quis nibh sem. Maecenas augue lectus, vehicula sit amet mattis eu, molestie et tortor. In non tellus a nulla ornare pellentesque. Nullam varius sollicitudin libero, ut ornare tellus laoreet eget.
<br/><br/>
Donec sodales neque ut erat tristique consequat. Vivamus id consequat nulla, eu tempus libero. Sed consequat dapibus neque ut consectetur. Cras id sagittis purus. Morbi tortor urna, scelerisque nec dapibus eget, luctus at elit. Proin facilisis eu lectus sed lacinia. Pellentesque molestie hendrerit metus in egestas. Sed eget gravida augue, vitae porttitor ex. Praesent ultricies nisl at massa consequat commodo. Maecenas eget laoreet metus. Integer faucibus dolor felis, vel lacinia magna vulputate quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed egestas orci vel nibh sagittis dignissim. Integer lacinia accumsan volutpat. Aenean faucibus, urna finibus mollis porttitor, mauris orci maximus erat, sed dignissim erat mauris non felis. Sed felis sem, ultricies eu nisl nec, sodales pellentesque sem.
<br/><br/>
Vestibulum tristique purus ut eleifend tempor. Nunc sed nibh at lectus ultrices dapibus ac a lacus. Pellentesque eget aliquam arcu. Praesent ornare nulla non fringilla interdum. Donec sit amet felis ultricies elit tincidunt posuere. Nulla tincidunt commodo eros, sed blandit augue luctus ac. Vestibulum ante lorem, rhoncus sed porta et, bibendum eget arcu. Proin auctor efficitur ante eu bibendum. Nulla quis arcu felis. Aenean faucibus posuere eleifend.
<br/><br/>
Nulla malesuada, sapien vitae auctor vestibulum, ex libero fermentum quam, in consectetur risus purus eu erat. Donec lacus quam, scelerisque at nulla quis, ultrices sodales dolor. Morbi ex mi, porta eget luctus ac, gravida quis justo. Nullam eget metus ultrices, condimentum mauris ut, sagittis leo. Vestibulum sollicitudin lacinia pharetra. Nullam vel lectus ac urna consequat commodo. Curabitur rhoncus erat a aliquet auctor. Ut lacus elit, gravida sed erat quis, rhoncus maximus enim. Nunc ac tristique sem. In hendrerit odio sed dapibus malesuada.
<br/><br/>
Praesent euismod suscipit rhoncus. Suspendisse potenti. Morbi cursus odio ut placerat placerat. Donec rhoncus magna non felis semper, eu fringilla ante lacinia. Duis facilisis massa non enim vestibulum fringilla. Donec at maximus sem. Phasellus porta mauris neque, id cursus nibh imperdiet nec. Cras turpis arcu, interdum in libero eu, efficitur consectetur ligula. Duis eu felis rutrum, mollis urna ac, volutpat elit. In mollis nisl sapien, et vestibulum elit varius ac. Aenean at venenatis justo. Aenean nunc arcu, dapibus in eros quis, semper pharetra ex. Cras at nibh sit amet risus pulvinar lobortis vitae non nibh. Quisque vitae neque ut velit egestas lobortis quis sit amet felis.
<br/><br/>
Etiam et quam ut nibh auctor laoreet. Nunc rutrum nulla nec mauris iaculis iaculis. Nullam sed euismod tellus, ut auctor massa. Maecenas quis elementum libero. Suspendisse at gravida sapien. Duis pulvinar elit eu turpis finibus, accumsan molestie est mollis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Morbi id vehicula eros. Proin sodales vestibulum dolor, faucibus semper ipsum sollicitudin non. Maecenas id venenatis metus, eget vestibulum mi. Maecenas ac faucibus augue.
<br/><br/>
Vestibulum turpis erat, tincidunt at suscipit nec, pulvinar at eros. Nam aliquam libero nulla, vel placerat nibh sagittis eget. Mauris volutpat lacus eget diam sollicitudin euismod et sit amet eros. Donec ut tortor posuere, malesuada eros vel, ultrices ante. Curabitur lacinia placerat orci ut bibendum. Morbi ultrices augue in mauris finibus, non auctor lacus ultricies. Pellentesque odio tortor, placerat faucibus ipsum sit amet, feugiat tempor nisi. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam ornare orci sit amet tortor hendrerit placerat. Sed viverra nisi sed felis tincidunt, ut pretium enim venenatis. Nam laoreet, ante vel interdum euismod, sem ex venenatis massa, eu suscipit tortor diam vel sem. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
`;

const body = document.querySelector('body');
body.append(text);

const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');

body.append(progressBar);


// Function to calculate scroll percentage
const calculateScrollPercentage = (event) => {
    const {scrollTop, scrollHeight, clientHeight} = event.target.documentElement;
    console.log({scrollTop, scrollHeight, clientHeight});
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}

 // Streams
 const scroll$ = fromEvent(document, 'scroll');
 //scroll$.subscribe(console.log);

 const progress$ = scroll$
    .pipe(
        map(calculateScrollPercentage),
        tap(console.log)
    );

progress$.subscribe(percentage => {
    progressBar.style.width = `${percentage}%`;
    console.log(`Percentage ${percentage}`);
});
