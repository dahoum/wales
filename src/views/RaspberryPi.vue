<template>
<h1>Raspberry Pi</h1>
<div class="container">
  <h3>What the 6502 did to the personal computing in the 70s and 80s is what Raspberry Pi is doing to the Supercomputing in the 2020s.</h3>
  <a href="https://magpi.raspberrypi.org/articles/raspberry-pi-4-vs-raspberry-pi-3b-plus">https://magpi.raspberrypi.org/articles/raspberry-pi-4-vs-raspberry-pi-3b-plus</a>
  <h4>Raspberry Pi 4</h4>
  <a href="https://magpi.raspberrypi.org/articles/raspberry-pi-4-specs-benchmarks">https://magpi.raspberrypi.org/articles/raspberry-pi-4-specs-benchmarks</a>
  <h4>NAS</h4>
  <a href="https://magpi.raspberrypi.org/articles/build-a-raspberry-pi-nas">https://magpi.raspberrypi.org/articles/build-a-raspberry-pi-nas</a>
  <h3>Raspbian OS</h3>
  <a href="https://arstechnica.com/information-technology/2013/03/how-two-volunteers-built-the-raspberry-pis-operating-system/">https://arstechnica.com/information-technology/2013/03/how-two-volunteers-built-the-raspberry-pis-operating-system/</a>
  <h3>Beowulf Cluster</h3>
  <h3>Raspberry Pi Clusters</h3>
  <a href="https://cluster.bitscope.com/">BitScope</a>
  <h3></h3>
  <a href="https://www.theregister.com/2017/11/13/los_alamos_lab_creates_750_node_rpi_cluster/">Los Almos National Laboratory 750 Nodes Cluster</a>
  <h3></h3>
  <a href="http://www.southampton.ac.uk/~sjc/raspberrypi/pi_supercomputer_southampton.htm">University of Southhampton Raspberry Pi Supercomputer</a>
  <h3></h3>
  <a href="https://tldp.org/HOWTO/openMosix-HOWTO/x135.html">openMosix</a>
  <h3></h3>
  <a href="https://magpi.raspberrypi.org/articles/build-a-raspberry-pi-cluster-computer">Build a Raspberry Pi Cluster Computer (MagPi Magazine)</a>
  <h3>Ansible</h3>
  <a href="https://www.jeffgeerling.com/blog/ansible-deployments-visualized-raspberry-pi">https://www.jeffgeerling.com/blog/ansible-deployments-visualized-raspberry-pi</a>
  <h3>DIN Rail</h3>
  <a href="https://www.pishop.us/product/dinrplate-drp2-din-rail-mount-for-raspberry-pi-3-4/">https://www.pishop.us/product/dinrplate-drp2-din-rail-mount-for-raspberry-pi-3-4/</a>
  <h3>Beowulf Cluster Desktop</h3>
  <a href="https://www.raspberrypi.org/forums/viewtopic.php?t=154547">Raspberry Pi 3</a>
  <h3>Node.js Cluster</h3>
  <a href="https://nodejs.org/api/cluster.html">https://nodejs.org/api/cluster.html</a>
  <h3></h3>
  <a href="https://nodejs.org/api/cluster.html">https://nodejs.org/api/cluster.html</a>
  <h3>3d Printed Raspberry Pi Cases</h3>
  <a href="https://www.thingiverse.com/thing:3858968">Raspberry Pi 1, 2, 3 and 4 Modular Cases and Cluster</a>
  <h3>Raspberry Pi 4 Cooling Options</h3>
  <a href="https://magpi.raspberrypi.org/articles/group-test-best-raspberry-pi-4-thermal-cases-tested-and-ranked">Cooling</a>
  <h3>Compact Raspberry Pi</h3>
  <a href="https://magpi.raspberrypi.org/articles/cutiepi-project-showcase">https://magpi.raspberrypi.org/articles/cutiepi-project-showcase</a>
  <h3></h3>
  <a href="https://thepihut.com/products/raspberry-pi-official-7-touchscreen-case">Case for Raspberry Pi Official 7" Touchscreen</a>
  <a href="https://thepihut.com/collections/raspberry-pi-screens/products/official-raspberry-pi-7-touchscreen-display">Official Raspberry Pi 7" Touchscreen Display</a>
  <h3>Industrial Applications</h3>
  <a href="https://revolution.kunbus.de/shop/">https://revolution.kunbus.de/shop/</a>
  <h3></h3>
  <a href="https://www.ebay.ca/itm/HIRSCHMANN-IEC-61131-2-SPIDER-II-8TX-RAIL-SWITCH-/113727224516">https://www.ebay.ca/itm/HIRSCHMANN-IEC-61131-2-SPIDER-II-8TX-RAIL-SWITCH-/113727224516</a>
  <h3></h3>
  <a href="https://en.wikipedia.org/wiki/DIN_rail">https://en.wikipedia.org/wiki/DIN_rail</a>
</div>
<Footer/>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Footer from "@/components/Footer.vue"; 

@Options({
  components: {
    Footer
  }
})
export default class Nurseries extends Vue {}
</script>

<style scoped lang="scss">
h1 {
  font-weight: 400;
  font-size: 2.5rem;
  margin-top: 4rem;
  margin-bottom: 1rem;
}

h3 {
  font-weight: 300;
  font-size: 1.5rem;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

h4 {
  font-weight: 300;
  font-size: 0.8rem;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

a {
  font-weight: 400;
  padding: 1.5rem;
  font-size: 1.2rem;
  color: rgb(46, 46, 46);
}
</style>