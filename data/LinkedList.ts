import { SongType } from "@/types";
import { Videos } from "./data";
class Nodee {
    data: SongType;
    next: Nodee | null;
    prev: Nodee | null;
  
    constructor(data: SongType) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }
  }
  
  class CircularDoublyLinkedList {
    head: Nodee | null;
    tail: Nodee | null;
    curr: Nodee | null;

    constructor() {
      this.head = null;
      this.tail = null;
        this.curr = null;
    }
  
    append(data: SongType) {
      const newNode = new Nodee(data);
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
        newNode.next = newNode;
        newNode.prev = newNode; 
      } else {
        const tail = this.tail!;
        tail.next = newNode;
        newNode.prev = tail;
        newNode.next = this.head;
        this.head!.prev = newNode;
        this.tail = newNode; 
        
      }
    }
    
    setCurrentSong(data:SongType){
        let temp = this.head;
        while(temp){
            if(temp.data.id === data.id){
                this.curr = temp;
                break;
            }
            temp = temp.next;
        }
    }


    getCurrentSong(){
        return this.curr!.data;
    }

    getNextSong(){
        this.curr = this.curr!.next;
        return this.curr!.data;
    }
    getPrevSong(){
        this.curr = this.curr!.prev;
        return this.curr!.data;
    }
  }
  
 const List = new CircularDoublyLinkedList();

// List.append(1);
// List.append(2);
// List.append(3);
// List.append(4);
// List.append(5);
for(let i = 0; i<Videos.length;i++){
  List.append(Videos[i]);
}


 export default List;