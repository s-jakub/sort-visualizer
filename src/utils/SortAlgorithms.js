import { sleep } from "./sleep";
import { swap } from "./swap"

export class SortAlgorithms {
    #arrayToSort
    #setArrayToSort
    #animationArray
    #speed

    constructor(arrayToSort, setArrayToSort, animationArray, speed) {
        this.#arrayToSort = arrayToSort;
        this.#setArrayToSort = setArrayToSort
        this.#animationArray = animationArray
        this.#speed = Number.parseInt(speed)
    }


    async bubbleSort() {

        let array = [...this.#arrayToSort];
        
        for(let i = 0; i < array.length; i++) {
            for(let j = 0; j < array.length - i - 1; j++) {
            
                this.#animationArray[j].style.backgroundColor = 'red';
                this.#animationArray[j + 1].style.backgroundColor = 'red';
                await sleep(-this.#speed);
               
                if(array[j] > array[j + 1]) 
                    swap(array, j, j + 1);

                
                
                this.#animationArray[j].style.backgroundColor = 'black';
                this.#animationArray[j + 1].style.backgroundColor = 'black';

                this.#setArrayToSort([...array])
            
            }
            // this.#animationArray[this.#animationArray.length - 1 - i].style.backgroundColor = 'green';
        }

        return true
    }

    async cocktailShakerSort() {

        const array = [...this.#arrayToSort];
        let isSwapped = false;

        for(let i = 0; i < array.length; i++) {
            
            isSwapped = false;

            for(let j = 0 + i; j < array.length - i - 1; j++) {

                this.#animationArray[j].style.backgroundColor = 'red';
                await sleep(-this.#speed);

                if(array[j] > array[j + 1]) {
                    swap(array, j, j + 1);   
                    isSwapped = true
                }

                this.#setArrayToSort([...array]);
                this.#animationArray[j].style.backgroundColor = 'black';
            }

            if(!isSwapped) 
                return true;
            
            isSwapped = false;

            for(let x = array.length - i - 1; x > 0 + i; x--) {

                this.#animationArray[x].style.backgroundColor = 'red';
                await sleep(-this.#speed);

                if(array[x] < array[x - 1]) {
                    swap(array, x, x - 1);
                    isSwapped = true;
                }

                this.#setArrayToSort([...array]);
                this.#animationArray[x].style.backgroundColor = 'black';
            }

            if(!isSwapped) 
                return true;     

        }

        return true;

    }

    async gravitySort() {

        const array = [...this.#arrayToSort]
        const max = Math.max(...array);
        let newArr = Array(array.length).fill(0).map(val => Array(max).fill(0))
        let counter;

        array.forEach((val, index) => {
            for(let i = 0; i < val; i++) {
                newArr[index][i] = 1 
            }
        })

        for(let x = array.length - 1; x >= 0; x--) {

            await sleep(-this.#speed);

            for(let i = newArr.length - 1; i >= 0; i--) {
                counter = 0;

                for(let j = newArr.length - 1; j >= 0; j--) {
                    
                    if(!newArr[i][j]) {
                        let temp = newArr[i][j];
                        newArr[i][j] = newArr[i - 1 >= 0 ? i - 1 : i][j];
                        newArr[i - 1 >= 0 ? i - 1 : i][j] = temp;
                    }

                    if(newArr[i][j])
                        counter++;
                }

                array[i] = counter;
                this.#setArrayToSort([...array]);
            }
        }

        return true

    }

    #buildMaxHeap(array, heapSize, parentIndex) {
        let maxIndex = parentIndex;
        const leftChildIndex = 2 * parentIndex + 1;
        const rightChildIndex = 2 * parentIndex + 2;

        if(leftChildIndex < heapSize && array[maxIndex] < array[leftChildIndex]) 
            maxIndex = leftChildIndex;
        

        if(rightChildIndex < heapSize && array[maxIndex] < array[rightChildIndex]) 
            maxIndex = rightChildIndex;
        

        if(maxIndex !== parentIndex) {
            swap(array, parentIndex, maxIndex)
            this.#buildMaxHeap(array, heapSize, maxIndex);
        }
    }

    async heapSort() {

        const array = [...this.#arrayToSort]
        let heapSize = array.length;

        for(let i = Math.floor((heapSize / 2) - 1); i >= 0; i--) {

            await sleep(-this.#speed / 10);
            await this.#buildMaxHeap(array, heapSize, i)
            this.#setArrayToSort([...array])

        }

        for(let i = heapSize - 1; i >= 0; i--) {

            await sleep(-this.speed);
            swap(array, i, 0);
            await this.#buildMaxHeap(array, i, 0);
            this.#setArrayToSort([...array])

        }

        return true;
    }

    async insertSort() {

            let array = [...this.#arrayToSort];
            let temp, j;

            for(let i = 1; i < array.length; i++) {

                this.#animationArray[i].style.backgroundColor = 'blue';
                temp = array[i];
                j = i - 1;

                while( j >= 0 && temp < array[j]) {

                    this.#animationArray[j].style.backgroundColor = 'red';
                    this.#animationArray[j+1].style.backgroundColor = 'black';
                    this.#animationArray[i].style.backgroundColor = 'blue';

                    await sleep(-this.#speed);
                    array[j + 1] = array[j];
                    j--;
                }

                array[j+1] = temp;
                this.#animationArray[j+1].style.backgroundColor = 'black';
                this.#animationArray[i].style.backgroundColor = 'black';

                this.#setArrayToSort([...array]);
            }

            return true;
    }


    async #merge(array, firstIndex, middleIndex, lastIndex, animationArray, speed, setArrayToSort) {
        const newArray = new Array(array.length);
        let left = firstIndex;
        let right = middleIndex;
        
        animationArray[firstIndex].style.backgroundColor = 'green';
        animationArray[lastIndex].style.backgroundColor = 'green';
        animationArray[middleIndex].style.backgroundColor = 'blue';
        
        for(let i = firstIndex; i <= lastIndex; i++) {
            
            animationArray[i !== lastIndex ? i + 1 : i].style.backgroundColor = 'red';
            await sleep(-speed);
            
            if((left === middleIndex) || ((right <= lastIndex) && (array[left] > array[right]))) {
                newArray[i] = array[right]
                right++
            }else{
                newArray[i] = array[left]
                left++
            }
            
            animationArray[i !== lastIndex ? i + 1 : i].style.backgroundColor = 'black';
            setArrayToSort([...newArray])
        }

        for(let i = firstIndex; i <= lastIndex; i++){
            array[i] = newArray[i];
        }

        animationArray[firstIndex].style.backgroundColor = 'black';
        animationArray[lastIndex].style.backgroundColor = 'black';
        animationArray[middleIndex].style.backgroundColor = 'black';
        setArrayToSort([...array]);
    }

    async mergeSort(array = this.#arrayToSort, firstIndex = 0, lastIndex = this.#arrayToSort.length - 1) {

        const middleIndex = Math.floor((firstIndex + lastIndex + 1) / 2);
        
        if(middleIndex - firstIndex > 1) 
            await this.mergeSort(array, firstIndex, middleIndex - 1);
        
        if(lastIndex - middleIndex > 0)
            await this.mergeSort(array, middleIndex, lastIndex);
        
        await this.#merge(array, firstIndex, middleIndex, lastIndex, this.#animationArray, this.#speed, this.#setArrayToSort)

        return true;
    }

    async quickSort(array = this.#arrayToSort, firstIndex = 0, lastIndex = this.#arrayToSort.length - 1) {

        let middleIndex = Math.floor((firstIndex + lastIndex) / 2);
        const pivot = array[middleIndex];
        array[middleIndex] = array[lastIndex]
        let j = firstIndex;

        this.#animationArray[middleIndex].style.backgroundColor = 'blue';
        this.#animationArray[firstIndex].style.backgroundColor = 'green';
        this.#animationArray[lastIndex].style.backgroundColor = 'green';

        await sleep(-this.#speed);
        for(let i = firstIndex; i < lastIndex; i++) {
            

            if(i !== middleIndex)
                this.#animationArray[i].style.backgroundColor = 'red';
            
            
            await sleep(Math.floor(-this.#speed / 10));

            if(array[i] < pivot) {
                swap(array, i, j);
                j++;
            }
            
            if(i !== middleIndex)
                this.#animationArray[i].style.backgroundColor = 'black';
        }
        
        

        array[lastIndex] = array[j];
        array[j] = pivot;

        this.#setArrayToSort([...array]);
        this.#animationArray[middleIndex].style.backgroundColor = 'black';
        this.#animationArray[firstIndex].style.backgroundColor = 'black';
        this.#animationArray[lastIndex].style.backgroundColor = 'black';

        if(firstIndex < j - 1)
            await this.quickSort(array, firstIndex, j - 1)
        
        if(lastIndex > j + 1)
            await this.quickSort(array, j + 1, lastIndex)

        return true;
    }

    #makeHistogram(array, range, divider) {

        let countNumber = new Array(range).fill(0);

        array.map(val => {
            return countNumber[Math.floor((val / divider) % 10)] += 1;
        });
        
        for(let i = 1; i < countNumber.length; i++) {
            countNumber[i] += countNumber[i - 1];
        }
    
        return countNumber;
    }

    async #countingSort(array, range, divider, animationArray, speed, setArrayToSort) {
        
        let sortedArray = new Array(array.length);
        const histogram = this.#makeHistogram(array, range, divider);
    

        for(let i = array.length - 1; i >= 0; i--) 
            sortedArray[--histogram[Math.floor((array[i] / divider) % 10)]] = array[i];
    
        for(let i = 0; i < array.length; i++) {

            animationArray[i].style.backgroundColor = 'red'
            await sleep(-speed)
            array[i] = sortedArray[i]
            setArrayToSort([...array])
            animationArray[i].style.backgroundColor = 'black'
            
        }
    }

    async radixSort() {

        const max = Math.max(...this.#arrayToSort)

        for(let divider = 1; divider <= max; divider *= 10)
            await this.#countingSort(this.#arrayToSort, 10, divider, this.#animationArray, this.#speed, this.#setArrayToSort);

        return true;
    }

    async selectSort() {

        const array = [...this.#arrayToSort];
        let minValue, minIndex;

        for(let i = 0; i < array.length; i++) {

            minIndex = i;
            minValue = array[i];
            for(let j = i + 1; j < array.length; j++) {

                this.#animationArray[j].style.backgroundColor = 'red';
                await sleep(-this.#speed);
                
                if(minValue > array[j]) {
                    this.#animationArray[minIndex].style.backgroundColor = 'black';
                    minIndex = j;
                    minValue = array[j];
                }
                
                this.#animationArray[i].style.backgroundColor = 'blue';
                this.#animationArray[minIndex].style.backgroundColor = 'green';
                this.#animationArray[j].style.backgroundColor = 'black';
            }

            array[minIndex] = array[i];
            array[i] = minValue;

            this.#animationArray[minIndex].style.backgroundColor = 'black'
            this.#animationArray[i].style.backgroundColor = 'black'
            this.#setArrayToSort([...array])
        }

        return true;
    }


}