// Comment headers
import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  /* Variables
  -------------------------------------------------- */
  array: any = [];
  name: any = '';
  number: any = 5;
  /* End of Variables
  -------------------------------------------------- */
  /* Input & Output
  -------------------------------------------------- */
  @Input() inCome!: any;
  @Output() outCome = new EventEmitter<any>();
  /* End of Input & Output
  -------------------------------------------------- */
  constructor(private _HttpClient: HttpClient, private _Router: Router) { }
  /* life Cycle components
  -------------------------------------------------- */
  // * on init components
  ngOnInit(): void { }
  // * after view  components render
  ngAfterViewInit(): void { }
  // * on Input change
  ngOnChanges(): void { }
  // * on Destroy components
  ngOnDestroy(): void { }
  /* End of life Cycle components
  -------------------------------------------------- */

  /* Logic & function
  -------------------------------------------------- */
  /**
  * Calculates the sum of two numbers
  *
  * @param {number} a - The first number to add
  * @param {number} b - The second number to add
  * @returns {number} - The sum of a and b
  */
  sum(a: any, b: any) {
    // Check if both arguments are numbers
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Both arguments must be numbers');
    }
    // Calculate the sum of a and b
    const result = a + b;
    // Return the result
    return result;
  }

  /* End of Logic & function
  -------------------------------------------------- */

  // SAMPLE
  /* -------------------------------------------------------------------------- */

  // SAMPLE
  // ────────────────────────────────────────────────────────────────────────────────

  //
  // ─── SAMPLE COMMENT ─────────────────────────────────────────────────────────
  //

  //
  // ───────────────────────────────────────────────── SAMPLE COMMENT ───
  //
  // TODO:
  // FIXME:
  // NOTE:
  // REVIEW:
  // @bug
  // @Vision
  // @issue
  // @
  // #
  // !
  // ~
  // *
  // @Action
  // @Observation
  // @Question
  // @startmc
  // @test
  // @rejecting
  // ! important:
  // ?
  // !
  // &
  // ~
  // ^
  // todo
  // ?
  // LINK
  // ANCHOR
  // FIXME
  // NOTE
  // REVIEW
  // STUB
  // SECTION
  // @bug
  // @Vision
  // @issue
  /***************************************
  *                                      *
  *              ctrl alt /              *
  *                                      *
  ***************************************/
  //
  // ─── SECTION COMMENT ─────────────────────────────────────────────────────────
  //

  //
  // ───────────────────────────────────────────────── REVERSE SECTION COMMENT ───
  //

  /**
  *
  * Block comment
  *
  */
  //
  /*----------  Subsection comment block  ----------*/
  //
  /*=============================================
  = Section comment block            =
  =============================================*/

  /*=====  End of Section comment block  ======*/
  // ALT + Y
  /* -------------------------------------------------------------------------- */
  // ALT +L
  // ────────────────────────────────────────────────────────────────────────────────
  /**==============================================
  * *                   INFO
  *
  *
  *
  *
  *=============================================**/
}
