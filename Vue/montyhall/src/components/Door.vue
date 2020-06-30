<template>
    <div class="door-area">
        <!-- se estiver selecionado e se a porta nao estiver aberta  -->
        <div class="door-frame" :class="{selected: selected && !open}">
            <Gift v-if="open && hasGift"/>
        </div>
        <div class="door" :class="{open}" @click="selected = !selected">
            <div class="number" :class="{selected}">{{number}}</div>
            <!-- click stop interrompe a propagação de outro click  -->
            <div class="knob" @click.stop="open = true" :class="{selected}"></div>
        </div>
    </div>
</template>

<script>
import Gift from './Gift'
export default {
    name: 'Door',
    components: {Gift},
    props: {
        number:{},
        hasGift: {type: Boolean}
    },
    data: function(){
        return {
            open: false,
            selected: false
        }
    }
}
</script>

<style>
:root {
    --door-border: 5px solid brown;
    --selected-border: 5px solid yellow;
}

.door-area{
    
    position: relative;
    height: 310px;
    width: 200px;
    border-bottom: 10px solid #AAA;
    margin-bottom: 20px;
    font-size: 3rem;

    display:flex;
    justify-content: center;
}
.door-frame{
    position: absolute;
    height: 300px;
    width: 180px;

    border-left: var(--door-border);
    border-top: var(--door-border);
    border-right: var(--door-border);

    display: flex;
    justify-content: center;
    align-items: flex-end;
}
.door-frame.selected{
    
    border-left: var(--selected-border);
    border-top: var(--selected-border);
    border-right: var(--selected-border);

}

.door {
    position: absolute;
    top: 5px;
    height: 295px;
    width: 170px;
    background-color: sienna;
    
    display: flex;
    flex-direction: column;
    padding: 20px;
    align-items: center; 
}
.door .knob{
    height: 20px;
    width: 20px;
    border-radius: 10px;
    background-color: brown;

    /* peguei um elemento especifico e butei onde quis  */
    align-self: flex-start;
    margin-top: 60px;
}
.door .knob.selected{
    background-color: yellow;
}
.door.open{
    background-color: #1c1c1c;
}
.door.open .knob{
    display:none;
}
.door.open .number{
    display: none;
}




/* .door{
    display: flex;
    height: 100%;
    background-color: sienna;
}
.door.number{
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 2.9em;
}
.knob{
    background-color: rgb(61, 32, 18);
    height: 10px;
    width: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

}

.door-frame{
    background-color: #1c1c1c;
    height: 100%;
    display: none;
} */
</style>