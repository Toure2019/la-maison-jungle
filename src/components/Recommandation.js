const currentmonth = new Date().getMonth();
const isSpring = currentmonth >=2 && currentmonth <= 5;
console.log(currentmonth);

function Recommandation() {
    if (!isSpring) {
        return <div>Ce n'est pas le moment de rempoter</div>
    }
    return <div>C'est le printemps, rempotez</div>
}

export default Recommandation;